const fs = require('fs');
const path = require('path');

const stages = [
    { name: 'preservation', count: 2, label: 'Preservation' },
    { name: 'preparation', count: 3, label: 'Preparation' },
    { name: 'inoculation', count: 2, label: 'Inoculation' },
    { name: 'incubation', count: 2, label: 'Incubation' },
    { name: 'fruiting', count: 2, label: 'Fruiting' },
    { name: 'harvest', count: 2, label: 'Harvest' },
    { name: 'culinary', count: 8, label: 'Culinary' },
];

const outputDir = path.join(process.cwd(), 'public', 'images', 'process');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

stages.forEach(stage => {
    for (let i = 1; i <= stage.count; i++) {
        const fileName = `${stage.name}_${i}.svg`;
        const filePath = path.join(outputDir, fileName);

        // Vary color slightly for each stage to distinguish them visualy
        const colors = {
            'preservation': '#E6CCB2',
            'preparation': '#DDB892',
            'inoculation': '#B08968',
            'incubation': '#7F5539',
            'fruiting': '#9C6644',
            'harvest': '#BB8588', // distinctive
            'culinary': '#D8E2DC'  // distinctive
        };

        const bgColor = colors[stage.name] || '#F2E8CF';

        const svgContent = `
<svg width="600" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${bgColor}"/>
  <text x="50%" y="45%" font-family="Arial" font-size="40" fill="#5c4033" font-weight="bold" dominant-baseline="middle" text-anchor="middle">${stage.label}</text>
  <text x="50%" y="55%" font-family="Arial" font-size="80" fill="#5c4033" font-weight="bold" dominant-baseline="middle" text-anchor="middle">${i}</text>
</svg>`;

        fs.writeFileSync(filePath, svgContent.trim());
        console.log(`Created ${fileName}`);
    }
});
