import { App, Plugin, PluginSettingTab, Setting } from 'obsidian';

interface DistractionFreeSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: DistractionFreeSettings = {
	mySetting: 'default'
}

export default class DistractionFreePlugin extends Plugin {
	settings: DistractionFreeSettings;

	async onload() {
		await this.loadSettings();

		this.addCommand({
			id: 'toggle-distraction-free-mode',
			name: 'Toggle Distraction Free Mode',
			callback: () => {
				document.body.classList.toggle('distraction-free-mode');
			},
		});
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}