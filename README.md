# color

Edited by scillidan based on [madi](https://codepen.io/aphrodtes)'s pen [lacuna coil](https://codepen.io/aphrodtes/pen/zYNLLGV) that licensed under [MIT](https://github.com/scillidan/color/blob/main/LICENSE).

# Table

source | file
--- | ---
[中國傳統色彩 (Chinese traditional colors)](https://github.com/reorx/cht-colors) | [md](data/chinese-traditional-colors.md)
中国の伝統色 - 黑白 [(broken)](https://color-pallet.spark-a.com/china-tradition-color-monokuro) | [md](data/china-tradition-color-monokuro.md)
[zhongguose － 传统颜色](http://zhongguose.com) | [md](data/zhongguose.md)
[中国の伝統色320色](https://htmlcss.jp/color/china.html) | [md](data/china-tradition-color-320.md)
[NIPPON COLORS - 日本の伝統色](https://nipponcolors.com) | [md](data/nipponcolors.md)

## Witchcraft 🧙

```cmd
curl -k --remote-name-all -o - ^
  https://raw.githubusercontent.com/scillidan/color/main/data/{chinese-traditional-colors.md,china-tradition-color-monokuro.md,zhongguose.md,china-tradition-color-320.md,datanipponcolors.md} ^
  | mdtable2csv ^
  | xsv select hex,spelling,name ^
  | tidy-viewer -D -a -e ^
  | coloro ^
  | less -R
```

![](https://raw.githubusercontent.com/scillidan/repo_cos/main/screenshot/color.png)

Can enter `/something` to search in `less`. For example, enter `/zimu` find the rats.

![](https://raw.githubusercontent.com/scillidan/repo_cos/main/screenshot/color_cmd_zumi.png)