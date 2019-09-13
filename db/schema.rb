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

ActiveRecord::Schema.define(version: 20190911075754) do

  create_table "comments", force: :cascade do |t|
    t.string "name"
    t.text "comment"
    t.string "project"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "contacts", force: :cascade do |t|
    t.string "f_name"
    t.string "l_name"
    t.string "company"
    t.text "reason"
    t.string "email"
    t.string "phone"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "projects", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.text "link"
    t.string "language"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "blurb"
    t.string "pic1"
    t.string "pic2"
    t.string "pic3"
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
  end

  create_table "skills", force: :cascade do |t|
    t.string "name"
    t.integer "proficientcy"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
