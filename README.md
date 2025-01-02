# nfe-nfce-pdf
Biblioteca para geração Danfe NF-e/NFC-e em aplicações node.js

## Instalação
Basta instalar através dos comandos
```bash
npm install nfe-nfce-pdf
```
```bash
yarn add nfe-nfce-pdf
```

## Exemplo
```javascript
import { gerarPDF } from 'nfe-nfce-pdf';
import fs from 'fs';

const xml = fs.readFileSync('/path/to/file.xml').toString();
const pathLogo = '/path/to/logo';
const doc = await gerarPDF(xml, { pathLogo, cancelada: false });
doc.pipe(fs.createWriteStream('/path/to/file.pdf'));
```
