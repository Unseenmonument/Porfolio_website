source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

#ruby '2.3.3' ## See https://devcenter.heroku.com/articles/ruby-versions for more information.

#gem 'therubyracer', '~> 0.12.3'
gem 'rails', '~> 5.1.6'
gem 'sprockets-rails', :require => 'sprockets/railtie'
#gem 'sqlite3', '~> 1.4.1' #, '>= 1.4.1'
gem 'puma', '~> 3.12'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'
gem 'jquery-rails'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'
gem 'bootstrap', '~> 4.1.1'
gem 'bootstrap-sass', '~> 3.3.7'
gem 'mini_magick'
gem 'devise'
gem 'carrierwave'
gem 'popper_js', '~> 1.12.9'
gem 'simple_form'
gem 'pry'
gem 'mixitup-rails'
gem 'paperclip', '~> 5.2.1'
gem 'fog-aws' 
gem 'figaro'
gem 'pg'
#gem 'javascript', '~> 0.1.0'
## gem 'responders', '~> 2.3'
## gem 'rubyzip', '~> 1.2', '>= 1.2.2'
gem 'node', '~> 1.0'
#gem 'nodejs-rails', '~> 0.0.1'




group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
#  gem 'sqlite3'#, '~> 1.4', '>= 1.4.1'
	gem 'dotenv-rails'
end

group :development do
  gem 'web-console', '>= 3.3.0'
end

group :production do
#  gem 'pg'
  gem 'rails_12factor'
  gem 'aws-sdk', '~> 2.3'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
