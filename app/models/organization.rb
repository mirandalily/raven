class Organization < ActiveRecord::Base
  belongs_to :user
  belongs_to :category

  def donations=(str)
    write_attribute( :donations, str.split('/r/n') )
  end
end
