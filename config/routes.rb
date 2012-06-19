HelloBackbonejs::Application.routes.draw do
  root :to => "home#index"
  resources :todos
end
