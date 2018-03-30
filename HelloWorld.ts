class Startup {
    public static main(): number {
        console.log('Hello World! This is greeting from TypeScript.');
        console.log('Above application is build authomatically using "tsc watch -- tsconfig.json" command');
        console.log('That\'s all folks...');
        return 0;
    }
}

class Info {
    message: string;
    newline: boolean;

    constructor(message: string, newline: boolean = false) {
        if (message.length != 0) {
            this.message = message.toUpperCase() + ": ";
        }
        this.newline = newline;
    } 

    public about(): void {
        if (this.newline) console.log();
        console.log(this.message + 'Project to test TypeScript with VSCode\nRequires tsc to be installed.')
        console.log('VSCode is great!')
    }

    public tips(): void {
        if (this.newline) console.log();
        console.log(this.message + 'Use \'View: Minimize other editor groups\' to resize authomatically other editor groups in VS code')
    }

}

Startup.main();

const info = new Info("info", true);
info.about();
info.tips();
