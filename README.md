# WDP Projekt Zespołowy

## Opis projektu

DO UZUPEŁNIENIA

## Demo

https://cranky-crane.netlify.com

## Inicjacja projektu

Po sklonowaniu projektu, zainstaluj wymagane paczki komendą `npm install`.

Teraz możesz zacząć pracę, korzystając z przygotowanych zadania `npm run watch`.

Wszystkie potrzebne do pracy pliki źródłowe znajdują się w folderze `src/`.

## NPM Scripts

Dostępne są 3 główne skrypty przyspieszające pracę:

- `build`: na bazie plików z folderu `src` buduje project w folderze `dist`
- `watch`: odpala `browser-sync`, obserwuje zmiany w folderze `src` i przebudowuje projekt
- `code-quality`: skrypt dokonuje automatycznego formatowania plików w folderze `src/`
  zgodnie z przyjętą konwencją formatowania kodu i sprawdza błędy w JS.

**!!! UWAGA:** Wprowadziliśmy eksperymentalny podział całego HTMLa na mniejsze części.
Niestety nasz skrypt budujący obserwuje **jedynie** zmiany w pliku `index.html`.
W związku z tym faktem, dla taska `watch`, każda zmiana w plikach z folderu `src/partials`
wymaga również zmiany w głównym pliku `index.html`.
Może to być jakakolwiek zmiana (np. dodanie/usunięcie spacji, komentarza itp.)
Przepraszamy za utrudnienia; pracujemy nad lepszym rozwiązaniem.

## Git Hooks

Projekt korzysta z Git Hooks - możliwości uruchamiania skryptów w reakcji na wybrane zdarzenia programu Git.

Za każdym razem gdy wykonasz komendę `git commit` zostanie uruchomiony skrypt `code-quality`
dla plików, które zostały wybrane do za-commit'owania.

## Konwencje i dobre praktyki

DO UZUPEŁNIENIA
