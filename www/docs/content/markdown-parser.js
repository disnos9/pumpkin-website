document.addEventListener("DOMContentLoaded", function() {

    // Sample Markdown text
    const markdownText = `
# Documentation

## Introduction

Welcome to the Pumpkin Minecraft Server documentation. This section covers the basics of setting up and using the software.

## Features

- **High Performance**: Optimized for speed and efficiency.
- **Easy Setup**: User-friendly interface for quick configuration.

## Installation

1. Download the latest version from the [GitHub repository](https://github.com/Snowiiii/Pumpkin).
2. Follow the installation guide included in the package.

## Usage

After installation, configure your server settings in the \`config.yml\` file.

## Support

If you encounter any issues, check out our [support page](https://github.com/Snowiiii/Pumpkin/issues) or join our [Discord community](https://discord.gg/x2923hweS3).
`;

    // Corrected line to use the ID selector correctly
    document.getElementById('documentation').innerHTML = marked.parse(markdownText);
});