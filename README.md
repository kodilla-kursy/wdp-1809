# WDP-1809-03

[changelog](./changelog.md)

## Git dobre praktyki

#### Start z mastera
Zaczynając każde zadanie wycheckouttuj się najpierw na mastera, zrób pull'a i dopiero potem wycheckoutuj się na nowego brancha z zdaniem

#### Mądre `git add`
Pamiętaj, że używanie `git add .` może byc niebezpieczne i dodawać do stage wiele plików, których niekoniecznie chcesz dodać. Sprawdzaj to co dodajesz oraz to, jakie zmiany są dodawane do stage. Wykorzystuj `git status`

#### Rebase do mastera przed mergem
Jeśli Twoje zadanie zostało sprawdzone, warto jest upewnić się, że Twoje zadanie będzie przyłączone do mastera bez konflików. W tym celu należy uaktualnić swojego brancha za pomocą `git pull --rebase origin master`. Jeśli pojawią się jakieś konflikty to ich rozwiązywanie polega na modyfikacji plików z konfliktami, dodatniu ich do stage(patrz punkt wyżej) oraz kontynuowanie rebase za pomocą `git rebase --continue`. Zawsze możesz zawiesić rebase dzięki `git rebase --abort`

#### Edycja commitów
Włączenie trybu edycji commitów robimy za pomocą `git rebase -i HEAD~2` < ilość commitów do edycji - 2


## GIT - checkout do zdalnego brancha
1. Pobierz listę dostępnych branchy `git fetch`
2. Checkout na branch, którego źródło jest na githubie `git checkout -t origin/NAZWA_BRANCHA`
