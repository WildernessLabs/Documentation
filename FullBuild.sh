cd docs
bundle exec jekyll serve &
cd ..
cd docfx
./build-docs.sh
cp docs ../docs/_site -r
cd ..
sed -i -e 's/>Meadow.Peripherals\./>/g' docs/_site/docs/api/Meadow/toc.html
sed -i -e 's/>Meadow.Foundation\./>/g' docs/_site/docs/api/Meadow.Foundation/toc.html
