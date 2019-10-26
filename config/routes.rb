Rails.application.routes.draw do
  
  get 'contacts/index'

  get 'contacts/new'

  get 'contacts/edit'

  get 'contacts/create'

  get 'contacts/destroy'

  devise_for :users
  get 'skills/index'

  get 'skills/new'

  get 'skills/edit'

  get 'skills/show'

  get 'projects/index'
  get 'projects/new'
  get 'projects/edit'
  get 'projects/destroy'
  get 'projects/create'
  get 'projects/show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'homepages#index'

  resources :contacts
  resources :projects
  resources :skills

end
