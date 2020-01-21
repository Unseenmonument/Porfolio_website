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

  get '*unmatched_route', to: 'errors#not_found', code: 404

#  get "/404", to: 'errors#not_found'
#  get "/422", to: 'errors#unacceptable'
#  get "/500", to: 'errors#server_errors'

#  %w( 404 422 500 503 ).each do |code|
#    get code, :to => "errors#not_found", :code => code
#  end

#  match "/404", to: "errors#not_found", via: :all
  match "/500", to: "errors#server_errors", via: :all

end
