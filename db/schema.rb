# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20191020185555) do

  create_table "comments", force: :cascade do |t|
    t.string "name"
    t.text "comment"
    t.string "project"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "contacts", force: :cascade do |t|
    t.string "company"
    t.text "reason"
    t.string "email"
    t.string "phone"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "full_name"
    t.string "comment"
  end

  create_table "projects", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.text "link"
    t.string "language"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "blurb"
    t.string "pic1_file_name"
    t.string "pic1_content_type"
    t.integer "pic1_file_size"
    t.datetime "pic1_updated_at"
    t.string "pic2_file_name"
    t.string "pic2_content_type"
    t.integer "pic2_file_size"
    t.datetime "pic2_updated_at"
    t.string "pic3_file_name"
    t.string "pic3_content_type"
    t.integer "pic3_file_size"
    t.datetime "pic3_updated_at"
    t.string "main_pic_file_name"
    t.string "main_pic_content_type"
    t.integer "main_pic_file_size"
    t.datetime "main_pic_updated_at"
    t.string "pic1"
    t.string "pic2"
    t.string "pic3"
    t.string "main_pic"
  end

  create_table "skills", force: :cascade do |t|
    t.string "name"
    t.integer "proficientcy"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.string "username"
    t.string "title"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
