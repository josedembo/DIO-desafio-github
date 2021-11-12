const os = require("os");


setInterval(() => {
    const { arch, platform, totalmem, freemem } = os;
    const tRam = (totalmem() / 1024) / 1024;
    const fRam = (freemem() / 1024) / 1024;

    const usage = (fRam / tRam) * 100;

    const status = {
        Os: platform(),
        Arch: arch(),
        totalRAM: `${parseInt(tRam)} MB`,
        freeMem: `${parseInt(fRam)} MB`,
        usage: `${usage.toFixed(2)}%`
    }

    exports.status = status;

    // console.clear();
    // console.table(status);

}, 1000);
