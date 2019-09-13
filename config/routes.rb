Rails.application.routes.draw do
  
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

end
