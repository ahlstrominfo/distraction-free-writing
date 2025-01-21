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

## Installation

### Manual Installation

1. Download the latest release from the Releases section of the repository
2. Extract the zip file into your `.obsidian/plugins/` directory
3. Reload Obsidian
4. Enable the plugin in Settings > Community plugins

## Usage

1. Open the command palette (Ctrl/Cmd + P)
2. Search for "Toggle Distraction Free Mode"
3. Press Enter to toggle the mode on/off

You can also assign a hotkey to the toggle command in Obsidian's Hotkey settings.

## Customization

The plugin uses Obsidian's native CSS variables for spacing and styling. The content width is set to 800px by default, but you can override this in your custom CSS if desired:

```css
.distraction-free-mode .workspace-leaf-content {
  max-width: YOUR_PREFERRED_WIDTH_HERE;
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Support

If you encounter any issues or have suggestions for improvements, please file an issue on the GitHub repository.