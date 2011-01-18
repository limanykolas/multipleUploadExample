class Photo < ActiveRecord::Base
  belongs_to :album
  mount_uploader :image, ImageUploader

  def image=(val)
    unless val.is_a?(String)
      image_will_change!
      super
    end
  end
end

