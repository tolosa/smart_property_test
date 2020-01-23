# Smart Propery Test

Application also hosted in Heroku at https://smart-property-test.herokuapp.com/.

# Requirements

- Ruby 2.6.5
- PostgreSQL
- Yarn

# Instalation

Clone the repository:

```
git clone https://github.com/jcostello/smart_property_test && cd smart_property_test
```

Install Rails and dependencies:

```
gem install bundle
bundle install
```

Copy the `database.yml.example` file to `database.yml`, and edit it to set your PostgreSQL credentials:

```
cp config/database.yml.example config/database.yml
```

Install Yarn dependencies:

```
yarn install
```

Create and migrate your database:

```
bundle exec rake db:create db:migrate db:seed
# db:seed if optional, for seeding dummy data
```

Run the server:

```
bundle exec rails s
```

# Running Tests

```
bundle exec rails test
```

# API Doc

API documentation available at https://smart-property-test.herokuapp.com/apipie or locally at `localhost:3000/apipie`.
