class User < ActiveRecord::Base
  attr_accessible :age, :country, :name
end
