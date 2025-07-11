# color

[![CC0 1.0][cc-zero-image]][cc-zero]

[cc-zero]: http://creativecommons.org/licenses/zero/1.0/
[cc-zero-image]: https://i.creativecommons.org/l/zero/1.0/88x31.png
[cc-zero-shield]: https://img.shields.io/badge/License-CC%20ZERO%201.0-lightgrey.svg

[![](https://img.shields.io/badge/GitHub%20Pages-121013?style=for-the-badge&logo=github&logoColor=white)](https://scillidan.github.io/color)

Edited by scillidan based on [madi](https://codepen.io/aphrodtes)'s pen [lacuna coil](https://codepen.io/aphrodtes/pen/zYNLLGV) that licensed under [MIT](https://github.com/scillidan/color/blob/main/LICENSE).

![](asset/color.png)

## Data

| source | file |
| :- | :- |
| [中國傳統色彩 (Chinese traditional colors)](https://github.com/reorx/cht-colors) | [.md](data/chinese-traditional-colors.md) |
| † [中国の伝統色 - 黑白](https://color-pallet.spark-a.com/china-tradition-color-monokuro) | [.md](data/china-tradition-color-monokuro.md) |
| [zhongguose － 传统颜色](http://zhongguose.com) | [.md](data/zhongguose.md) |
| [中国の伝統色320色](https://htmlcss.jp/color/china.html) | [.md](data/china-tradition-color-320.md) |
| [NIPPON COLORS - 日本の伝統色](https://nipponcolors.com) | [.md](data/nipponcolors.md) |

## Witchcraft 🧙

Requirements:

- [mdtable2csv](https://github.com/515hikaru/mdtable2csv)
- [xsv](https://github.com/BurntSushi/xsv)
- [Tidy Viewer](https://github.com/alexhallam/tv)
- [Console Hex Color Highlighter](https://github.com/Insolita/coloro)

1. Get `xsv-0.13.0-x86_64-pc-windows-msvc.zip` from [xsv - Releases](https://github.com/BurntSushi/xsv/releases)
2. Get `tidy-viewer.exe` from [Tidy Viewer - Releases](https://github.com/alexhallam/tv/releases).

```sh
go install github.com/515hikaru/mdtable2csv@latest
pipx install coloro
```

Run:

```sh
curl -k --remote-name-all -o - \
  https://raw.githubusercontent.com/scillidan/color/main/data/{chinese-traditional-colors.md,china-tradition-color-monokuro.md,zhongguose.md,china-tradition-color-320.md,nipponcolors.md} \
  mdtable2csv \
  xsv select hex,spelling,name \
  tidy-viewer -D -a -e \
  coloro \
  less -R
```

![](asset/combo_color.png)

Can enter `/<string>` to search in `less`. For example, enter `/zimu` find the rats.

![](asset/combo_color_zumi.png)
