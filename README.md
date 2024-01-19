# color

Edited by scillidan based on [madi](https://codepen.io/aphrodtes)'s pen [lacuna coil](https://codepen.io/aphrodtes/pen/zYNLLGV) that licensed under [MIT](https://github.com/scillidan/color/blob/main/LICENSE).

![](https://raw.githubusercontent.com/scillidan/private_cos/main/screenshot/color.png)

## Table

source | file
:- | :-
[中國傳統色彩 (Chinese traditional colors)](https://github.com/reorx/cht-colors) | [md](data/chinese-traditional-colors.md)
† [中国の伝統色 - 黑白](https://color-pallet.spark-a.com/china-tradition-color-monokuro) | [md](data/china-tradition-color-monokuro.md)
[zhongguose － 传统颜色](http://zhongguose.com) | [md](data/zhongguose.md)
[中国の伝統色320色](https://htmlcss.jp/color/china.html) | [md](data/china-tradition-color-320.md)
[NIPPON COLORS - 日本の伝統色](https://nipponcolors.com) | [md](data/nipponcolors.md)

## Witchcraft 🧙

Install requirements:

```sh
go install github.com/515hikaru/mdtable2csv@latest
```

```sh
cargo install xsv
```

get `tidy-viewer.exe` from https://github.com/alexhallam/tv/releases

```sh
git clone https://github.com/Insolita/coloro
cd coloro
pip install -e .
```

Edit `coloro/main.py` [line 31](https://github.com/Insolita/coloro/blob/84418ad02ee579c74374fafa0e5bf3752547ca33/coloro/main.py#L31):

```py
sys.stdout.buffer.write(text.encode(sys.stdout.encoding, errors='replace'))
sys.stdout.buffer.write(b'\n')
```

and [line 50](https://github.com/Insolita/coloro/blob/84418ad02ee579c74374fafa0e5bf3752547ca33/coloro/main.py#L50-L51):

```py
with open(args.text, 'rb') as f:
  text = f.read().decode('utf-8')
```

and [line 53](https://github.com/Insolita/coloro/blob/84418ad02ee579c74374fafa0e5bf3752547ca33/coloro/main.py#L53):

```py
text = sys.stdin.buffer.read().decode('utf-8')
```

Then create `clr.cmd` or just run:

```cmd
curl -k --remote-name-all -o - ^
  https://raw.githubusercontent.com/scillidan/color/main/data/{chinese-traditional-colors.md,china-tradition-color-monokuro.md,zhongguose.md,china-tradition-color-320.md,nipponcolors.md} ^
  | mdtable2csv ^
  | xsv select hex,spelling,name ^
  | tidy-viewer -D -a -e ^
  | coloro ^
  | less -R
```

Can enter `/something` to search in `less`. For example, enter `/zimu` find the rats.

![](https://raw.githubusercontent.com/scillidan/private_cos/main/screenshot/color_cmd_zumi.png)