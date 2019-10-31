class Project < ApplicationRecord

	has_attached_file :main_pic, default_url: "/images/:style/missing.png", s3_permissions: :private, s3_server_side_encryption: "AES256"
	validates_attachment_content_type :main_pic, content_type: /\Aimage\/.*\z/

	has_attached_file :pic1, default_url: "/images/:style/missing.png", s3_permissions: :private, s3_server_side_encryption: "AES256"
	validates_attachment_content_type :pic1, content_type: /\Aimage\/.*\z/

	has_attached_file :pic2, default_url: "/images/:style/missing.png", s3_permissions: :private, s3_server_side_encryption: "AES256"
	validates_attachment_content_type :pic2, content_type: /\Aimage\/.*\z/

	has_attached_file :pic3, default_url: "/images/:style/missing.png", s3_permissions: :private, s3_server_side_encryption: "AES256"
	validates_attachment_content_type :pic3, content_type: /\Aimage\/.*\z/


#	has_attached_file :pic1, :styles => { :medium => "300x300", :thumb => "100x100" }
#	validates_attachment_content_type :pic1, content_type: /\Aimage\/.*\z/

#	has_attached_file :pic2, :styles => { :medium => "300x300", :thumb => "100x100" }
#	validates_attachment_content_type :pic2, content_type: /\Aimage\/.*\z/

#	has_attached_file :pic3, :styles => { :medium => "300x300", :thumb => "100x100" }
#	validates_attachment_content_type :pic3, content_type: /\Aimage\/.*\z/


end
