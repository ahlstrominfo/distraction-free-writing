# Obsidian Distraction Free Plugin

A minimal plugin for Obsidian that adds a true distraction-free writing mode, hiding all UI elements except your current note.

## Features

- Toggles a clean, distraction-free writing environment with a single command
- Hides all interface elements including:
  - Left and right sidebars
  - Ribbon menu
  - Status bar
  - Tab headers
  - View headers
  - Embedded backlinks
- Centers your content with a comfortable maximum width
- Maintains all your Obsidian functionality, just a keystroke away
- Smooth transitions when toggling the mode
- Compatible with both light and dark themes

## Installation

You can install this plugin in two ways:

### From Obsidian Community Plugins

1. Open Obsidian Settings
2. Navigate to Community Plugins
3. Click "Browse" and search for "Distraction Free Writing"
4. Click "Install"
5. Enable the plugin in Settings > Community plugins

### Manual Installation

1. Download the latest release from [GitHub Releases](https://github.com/ahlstrominfo/distraction-free-writing/releases)
2. Extract the zip file into your `.obsidian/plugins/` directory
3. Reload Obsidian
4. Enable the plugin in Settings > Community plugins

### Building from Source

If you prefer to build the plugin yourself:

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run build` to compile the plugin
4. Copy the contents of the `build` directory to your `.obsidian/plugins/distraction-free-writing` directory

## Usage

1. Open the command palette (Ctrl/Cmd + P)
2. Search for "Toggle Distraction Free Mode"
3. Press Enter to toggle the mode on/off

You can also assign a hotkey to the toggle command in Obsidian's Hotkey settings:

1. Go to Settings > Hotkeys
2. Search for "Distraction Free"
3. Click the "+" button to add your preferred key combination

## Customization

The plugin uses Obsidian's native CSS variables for spacing and styling. You can customize various aspects:

### Content Width

The content width is set to 800px by default. Override this in your custom CSS:

```css
.distraction-free-mode .workspace-leaf-content {
  max-width: YOUR_PREFERRED_WIDTH_HERE;
}
```

### Transition Speed

Adjust the animation speed when toggling the mode:

```css
.distraction-free-mode {
  transition: all 0.3s ease-in-out; /* Change timing as needed */
}
```

## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch for your feature
3. Make your changes
4. Submit a pull request

Please ensure your code follows the existing style and includes appropriate tests.

## Troubleshooting

Common issues and their solutions:

- **Plugin doesn't appear in Community Plugins**: Try refreshing the plugins list or restarting Obsidian
- **Styling conflicts**: Disable other appearance-modifying plugins temporarily to identify conflicts
- **Performance issues**: Check if other plugins might be interfering with the DOM manipulation

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- For bug reports and feature requests, please [create an issue](https://github.com/ahlstrominfo/distraction-free-writing/issues)
- For general questions, join the discussion in the [Obsidian Discord](https://discord.gg/obsidianmd)
- For updates and announcements, follow the [GitHub repository](https://github.com/ahlstrominfo/distraction-free-writing)

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes in each release.