const parseLyric = (text) => {
    let lines = text.split('\r\n'),
        pattern = /\[\d{2}:\d{2}.\d{2}\]/g,
        result = [];
    // 去掉数组中最后的空白;
    lines[lines.length - 1].length === 0 && lines.pop();

    lines.map((ele) => {
        let time = ele.match(pattern),
            value = ele.replace(pattern, '');
        time.map((e) => {
            let t = e.slice(1, -1).split(':');
            result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value]);
        })
    });

    // 最后将结果数组中的元素按时间大小排序，以便保存之后正常显示歌词;
    result.sort((a, b) => a[0] - b[0]);
    return result;
};


export { parseLyric }
