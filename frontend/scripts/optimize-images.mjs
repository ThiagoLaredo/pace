import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const currentFilePath = fileURLToPath(import.meta.url);
const rootDir = path.resolve(path.dirname(currentFilePath), '..');
const publicDir = path.join(rootDir, 'public');
const optimizedDir = path.join(publicDir, 'images', 'optimized');
const includeAvif = process.argv.includes('--avif');

const REMOTE_TIMEOUT_MS = 15000;

const jobs = [
  {
    id: 'hero-main',
    type: 'local',
    input: path.join(publicDir, 'images', 'hero-2.jpg'),
    outputDir: path.join(optimizedDir, 'hero'),
    baseName: 'hero-main',
    widths: [640, 960, 1280, 1600, 1920],
    sizes: '(max-width: 768px) 100vw, 100vw',
    fit: 'cover',
  },
  {
    id: 'unit-jardins',
    type: 'local',
    input: path.join(publicDir, 'images', 'unidades', 'Pace-Site-2025-Unidades-Jardins.jpg'),
    outputDir: path.join(optimizedDir, 'unidades'),
    baseName: 'jardins',
    widths: [320, 480, 640, 800],
    sizes: '(max-width: 768px) 100vw, 240px',
    fit: 'cover',
  },
  {
    id: 'unit-vila-mariana',
    type: 'local',
    input: path.join(publicDir, 'images', 'unidades', 'Pace-Site-2025-Unidades-Vila-Mariana.jpg'),
    outputDir: path.join(optimizedDir, 'unidades'),
    baseName: 'vila-mariana',
    widths: [320, 480, 640, 800],
    sizes: '(max-width: 768px) 100vw, 240px',
    fit: 'cover',
  },
  {
    id: 'unit-butanta',
    type: 'local',
    input: path.join(publicDir, 'images', 'unidades', 'Pace-Site-2025-Unidades-Butanta.jpg'),
    outputDir: path.join(optimizedDir, 'unidades'),
    baseName: 'butanta',
    widths: [320, 480, 640, 800],
    sizes: '(max-width: 768px) 100vw, 240px',
    fit: 'cover',
  },
  {
    id: 'unit-cap',
    type: 'local',
    input: path.join(publicDir, 'images', 'unidades', 'Pace-Site-2025-Unidades-CAP (1).jpg'),
    outputDir: path.join(optimizedDir, 'unidades'),
    baseName: 'cap',
    widths: [320, 480, 640, 800],
    sizes: '(max-width: 768px) 100vw, 240px',
    fit: 'cover',
  },
  {
    id: 'service-fisioterapia',
    type: 'remote',
    input: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4zP712PadSaj2nRB_72MWFRgDzpKf28qghiE4ZX7Y8z0PY7dtPBRjgGvncPbmlt6m_svQxQX7tWFv155sY9vUx7vDcOJFbsJNf0lcI33sJeDUbfb77uvGygEh6JC9Qmtn1S12z2Ofm67QcDQOZdK3Xa3BJxlNnmNfMLZwK8NxZaiYKT3Y4bVu7k5hMjY1akxGcH66gQPqW0XFk20VCPzJQGLzla5Xh0plX9vXRCGHTxm25n6XW5QIUVZ2wfctSJKHlutp7nSMB6I',
    outputDir: path.join(optimizedDir, 'services'),
    baseName: 'fisioterapia',
    widths: [320, 480, 640, 960],
    sizes: '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw',
    fit: 'cover',
  },
  {
    id: 'service-pace-sports',
    type: 'remote',
    input: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaztQJTeQtZ6JLwYwRj0kj1B_SJhv-o8io0lQMsX7nzk_nmzWMEgh8GvAn00tclZ0ZW7-8906vep-XWZ944hYW_EM3WY2iaNA9xxfJVt3MnIC-0BTFsAjYgjehNSfuLtZ3OOeQq-ML8It8oQrigXLToxg43DcXgHhwTXqX7x_dr13S6dwI9mvVa9DQXLswjrWGjgOR5tcSYp0YFWglK5rP_U8qIXZbgocqnm8ggPLauqOHNvTewKzsklLt5c91kzxSv30XdqKQDwk',
    outputDir: path.join(optimizedDir, 'services'),
    baseName: 'pace-sports',
    widths: [320, 480, 640, 960],
    sizes: '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw',
    fit: 'cover',
  },
  {
    id: 'service-prevencao',
    type: 'remote',
    input: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACzv-8QiS0EGp8CydOpWxONfPTy67d1cXZneFDZCMrdiRXu3m3FJXHcM4oPa-gg3svI8OEb4mfcx_9qu2xsk8iwYiMEgTP5-CJUWFMdQAQRPw28tgFfQk61j_qX1bzzHZItDJral0A54-zbgeM9vvvRnAHW7ArjOUQJjGaL0yAGRftGiaeGgK_I_F7kgdWSOjTLBRwHGm5yWZ3TsvUatzC4D8P32u4p84IXeFCXIteADD-dPFimyilXa-M8jfALLWh1TJOMc5e0lw',
    outputDir: path.join(optimizedDir, 'services'),
    baseName: 'prevencao',
    widths: [320, 480, 640, 960],
    sizes: '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw',
    fit: 'cover',
  },
  {
    id: 'service-recovery',
    type: 'remote',
    input: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBt5-CthE-c_RzPfec7pbDChU4URB2k3nQBgV-MOWxhaqh7mx0q9yBbq4cZ0_lMxYXTghZdzzQVGEKKt_R4aX0XwriBPMSZwcaHmQjb9GxztazhGB1skVu9dE-yOY4VypPiPoZwWqR-DbZqMsahKK-3dsBJIPADpGlm5jkT75wJ5ZlRXM0N4DHoKn-tJ_5u_FmhPwRAmJU9XRCJNl12XINTG0RLgJoW8Zp30_6qVbJdJ-cTuJYiw8Akv4CecD13E8bGHwJkJXZ9Qps',
    outputDir: path.join(optimizedDir, 'services'),
    baseName: 'recovery',
    widths: [320, 480, 640, 960],
    sizes: '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw',
    fit: 'cover',
  },
  {
    id: 'service-domiciliar',
    type: 'remote',
    input: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDo_ednhimcDm3hPamz55vThG7QFs7nguFoj0SpcT99z_ylUjgs4RpK7Ea6ShkcF9yiV7CuK5gTsOFe61CqkSEzwsCSNc_bssKphl1_XjJWOrbL-5Hr-mWzJhdyxf3EwjKq4RVhM3Cv4YI1BLKRVw3jSsDaUMKhCR_Wn87sEAwm-76jwbD9ghStDlbRje_ApH9LWFCI9tvmNE2nEbS9yHo4aRG3RwXCrP-_i407bIy8SZdX2ho8spELDe8QC0fL1D2-_euiviXyNEc',
    outputDir: path.join(optimizedDir, 'services'),
    baseName: 'domiciliar',
    widths: [320, 480, 640, 960],
    sizes: '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw',
    fit: 'cover',
  },
  {
    id: 'service-equipamentos',
    type: 'remote',
    input: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4RJT_ekZF9WtoSIKnye6grmhnNJxjnBHsel8uoDtMKHJCtF61N92C4JQjLK_neC2wSaldfD3kvSIXKwuaUOLvs9CelTgsjyHn7RNXAxX0hnMPk08GWTMaN55qUaoMgPRYHikjiP00FZ6Q5LTmTuMUF0v-hi6NUpd7dHxTNxAh5S3T5zs8NKOIrCFwIxXHWvRJnm39SuOE9ccgRXz7fhv9jEqKnDoeZ0onXndMqRpfL9njoK-0u1Nqe30pC2ZdCwIpX6tj0gzS2mo',
    outputDir: path.join(optimizedDir, 'services'),
    baseName: 'equipamentos',
    widths: [320, 480, 640, 960],
    sizes: '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw',
    fit: 'cover',
  },
  {
    id: 'structure-18',
    type: 'local',
    input: path.join(publicDir, 'images', 'clinica', 'pace_clinica-18.jpg'),
    outputDir: path.join(optimizedDir, 'clinica'),
    baseName: 'pace-clinica-18',
    widths: [480, 640, 960, 1280],
    sizes: '(max-width: 1024px) 100vw, 50vw',
    fit: 'cover',
  },
  {
    id: 'structure-27',
    type: 'local',
    input: path.join(publicDir, 'images', 'clinica', 'pace_clinica-27.jpg'),
    outputDir: path.join(optimizedDir, 'clinica'),
    baseName: 'pace-clinica-27',
    widths: [480, 640, 960, 1280],
    sizes: '(max-width: 1024px) 100vw, 50vw',
    fit: 'cover',
  },
  {
    id: 'structure-35',
    type: 'local',
    input: path.join(publicDir, 'images', 'clinica', 'pace_clinica-35.jpg'),
    outputDir: path.join(optimizedDir, 'clinica'),
    baseName: 'pace-clinica-35',
    widths: [480, 640, 960, 1280],
    sizes: '(max-width: 1024px) 100vw, 50vw',
    fit: 'cover',
  },
  {
    id: 'structure-44',
    type: 'local',
    input: path.join(publicDir, 'images', 'clinica', 'pace_clinica-44.jpg'),
    outputDir: path.join(optimizedDir, 'clinica'),
    baseName: 'pace-clinica-44',
    widths: [480, 640, 960, 1280],
    sizes: '(max-width: 1024px) 100vw, 50vw',
    fit: 'cover',
  },
  {
    id: 'structure-63',
    type: 'local',
    input: path.join(publicDir, 'images', 'clinica', 'pace_clinica-63.jpg'),
    outputDir: path.join(optimizedDir, 'clinica'),
    baseName: 'pace-clinica-63',
    widths: [480, 640, 960, 1280],
    sizes: '(max-width: 1024px) 100vw, 50vw',
    fit: 'cover',
  },
  {
    id: 'structure-80',
    type: 'local',
    input: path.join(publicDir, 'images', 'clinica', 'pace_clinica-80.jpg'),
    outputDir: path.join(optimizedDir, 'clinica'),
    baseName: 'pace-clinica-80',
    widths: [480, 640, 960, 1280],
    sizes: '(max-width: 1024px) 100vw, 50vw',
    fit: 'cover',
  },
  {
    id: 'partner-balance',
    type: 'remote',
    input: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZfH-TSOfMioAZRHp1BFheFgLB93buCNjMsj97-MD2qDOMD5_zdMO9j1ge7fv9fd1tqaCUsPysQk2pHaqpDWJIiRZFK_mn3Qt4ZkS_NeKlh8OopetJTVSUh6TTJQ7u_xISDw5dMKbXV7tC3e1gBQySZ3xHoo1JI2kPXZmbV1jy5BgdPd9NHgxej78wpkLmOtFf9S2w4FbdGuBOYQOMMn7YDan98u0DYK6XQP8fqu0oFAeSAoyiO9Ea2s71wGS0_VjKlPzkiClsXeg',
    outputDir: path.join(optimizedDir, 'partners'),
    baseName: 'balance',
    widths: [160, 240, 320],
    sizes: '(max-width: 768px) 120px, 160px',
    fit: 'inside',
  },
  {
    id: 'partner-boali',
    type: 'remote',
    input: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPslaSn0KgNu6S6dozFjiG7jomcXtX4ivXZABtNGMn6y71N1l9qCHI7lFVYdp3_8C642oaDvZaj5eimVJ7jBKYDk9NO0ln2-0-ij0cssRRFmLmwhQZztSY0BJOXT4Xxu_Ng07GFaqnf5CtCcCM3Mkrc7P3gsRCPNpKNVAegGdDvbjy4rIbqc-RmkvqgmcfAZYsejS97wcOOYUOSF2Xt5vjObIp36snAqTlMqMYMKmXmssIFdYfRpzgmaqGf4caC-xs7vjiMKQx2q0',
    outputDir: path.join(optimizedDir, 'partners'),
    baseName: 'boali',
    widths: [160, 240, 320],
    sizes: '(max-width: 768px) 120px, 160px',
    fit: 'inside',
  },
  {
    id: 'partner-bauerfeind',
    type: 'remote',
    input: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnMBYPBpR6ndoIy_MXRkyWOOdIZs-fEL8b9YPGkVF-aepfo-iqSfTSLaAnaPOFdK79OZ17-sGR4KtPtCFvrFhfWyG9ZOZ89abGgwFCPSG-YCYRGD5Se6EQzZigzX7iSti5t34d-rJRAUXwImcOx-tOa67uT6mbvd7ZQSTP6oq4zCuaBhJw19aAn5V-vRzO1zU6jyDi1N9FKR2pamu3uXY5gXFsQTNIyvrA_pEdJAdnctO4C4_0YmXJ_9zqNAU0Zpahy8JJZFx2ECA',
    outputDir: path.join(optimizedDir, 'partners'),
    baseName: 'bauerfeind',
    widths: [160, 240, 320],
    sizes: '(max-width: 768px) 120px, 160px',
    fit: 'inside',
  },
  {
    id: 'partner-djo',
    type: 'remote',
    input: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbjWtAA220zH__En_RMsQ5-lJ2-_IwQvvcaTSC5pC6VXQMg8h5chuHzvDdiDxQz0zuWTguEaRys7mF0-LZMphjlLxu6egu4CA2OLV6W2LwtgRHdxjUpkt0aNeIMIAyWHFcFhiUUYl_RDImIcwyReVm4gR9JwFhRv2vdVTAUxTps4GvfhbdJ_axZb6CoTKWjGLB4qjswfDs0aGqgZZNWCMOehWAXNZollnbLRvzaCtXoZlrFY3VbA1-tCPRdtSans-KMGEAANOAI4Y',
    outputDir: path.join(optimizedDir, 'partners'),
    baseName: 'djo',
    widths: [160, 240, 320],
    sizes: '(max-width: 768px) 120px, 160px',
    fit: 'inside',
  },
];

async function ensureDirectory(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function fetchWithTimeout(url, timeoutMs) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} while downloading ${url}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer);
  } finally {
    clearTimeout(timeoutId);
  }
}

async function loadInputBuffer(job) {
  if (job.type === 'local') {
    return fs.readFile(job.input);
  }

  return fetchWithTimeout(job.input, REMOTE_TIMEOUT_MS);
}

function toPublicPath(absolutePath) {
  return absolutePath.replace(publicDir, '').replace(/\\/g, '/');
}

async function generateVariants(job) {
  await ensureDirectory(job.outputDir);

  const inputBuffer = await loadInputBuffer(job);
  const metadata = await sharp(inputBuffer).metadata();

  if (!metadata.width || !metadata.height) {
    throw new Error(`Unable to read metadata for ${job.id}`);
  }

  const validWidths = [...new Set([...job.widths, metadata.width])]
    .sort((a, b) => a - b)
    .filter((width) => width <= metadata.width);

  const chosenWidths = validWidths.length > 0 ? validWidths : [metadata.width];

  const webpOutputs = [];
  const avifOutputs = [];

  for (const width of chosenWidths) {
    const basePipeline = sharp(inputBuffer).resize({
      width,
      fit: job.fit,
      withoutEnlargement: true,
    });

    const webpAbsolutePath = path.join(job.outputDir, `${job.baseName}-${width}.webp`);
    await basePipeline.clone().webp({ quality: 78, effort: 5 }).toFile(webpAbsolutePath);
    webpOutputs.push(`${toPublicPath(webpAbsolutePath)} ${width}w`);

    if (includeAvif) {
      const avifAbsolutePath = path.join(job.outputDir, `${job.baseName}-${width}.avif`);
      await basePipeline.clone().avif({ quality: 50, effort: 5 }).toFile(avifAbsolutePath);
      avifOutputs.push(`${toPublicPath(avifAbsolutePath)} ${width}w`);
    }
  }

  const fallbackAbsolutePath = path.join(job.outputDir, `${job.baseName}-fallback.webp`);
  const largestWidth = chosenWidths[chosenWidths.length - 1];

  await sharp(inputBuffer)
    .resize({ width: largestWidth, fit: job.fit, withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 })
    .toFile(fallbackAbsolutePath);

  return {
    id: job.id,
    width: metadata.width,
    height: metadata.height,
    sizes: job.sizes,
    webp: {
      src: toPublicPath(fallbackAbsolutePath),
      srcSet: webpOutputs.join(', '),
    },
    avif: includeAvif
      ? {
          srcSet: avifOutputs.join(', '),
        }
      : null,
    source: job.input,
  };
}

async function main() {
  await ensureDirectory(optimizedDir);

  const manifest = {
    generatedAt: new Date().toISOString(),
    includeAvif,
    images: {},
  };

  for (const job of jobs) {
    process.stdout.write(`Optimizing ${job.id}...\n`);
    const result = await generateVariants(job);
    manifest.images[job.id] = result;
  }

  const manifestPath = path.join(optimizedDir, 'manifest.json');
  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));

  process.stdout.write(`Done. Manifest written to ${manifestPath}\n`);
}

main().catch((error) => {
  process.stderr.write(`${error?.stack || error}\n`);
  process.exitCode = 1;
});
