class Organization < ActiveRecord::Base
  belongs_to :user
  belongs_to :category
  has_many :comments

  def donations=(str)
    write_attribute( :donations, str.split('/r/n') )
  end
end
