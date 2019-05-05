cd docs
bundle exec jekyll serve &
cd ..
cd docfx
./build-docs.sh
cp docs ../docs/_site -r
