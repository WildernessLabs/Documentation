cd docs
bundle exec jekyll build
cd ..
cd docfx
./build-docs.sh
cp docs ../docs/_site -r
