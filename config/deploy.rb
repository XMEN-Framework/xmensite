# config valid only for current version of Capistrano
lock "3.7.1"

set :application, "xmen-site"
set :repo_url, "git@github.com:XMEN-Framework/xmensite.git"

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
# set :deploy_to, "/var/www/my_app_name"
set :deploy_to, "/var/app/xmen-site"

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# append :linked_files, "config/database.yml", "config/secrets.yml"

# Default value for linked_dirs is []
# append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system"

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
# set :keep_releases, 5
set :keep_releases, 3

namespace :deploy do

    desc 'Restart application'
    task :build do
        on roles(:app), in: :sequence, wait: 5 do
            within release_path do
                execute :npm, "install"
                execute :bower, "install"
                execute :gulp, "build"
                sudo "supervisorctl restart xmen"
            end
        end
    end

    after :publishing, :build

    # after :restart, :clear_cache do
    #     on roles(:web), in: :groups, limit: 3, wait: 10 do
    #         # Here we can do anything such as:
    #         # within release_path do
    #         #   execute :rake, 'cache:clear'
    #         # end
    #     end
    # end

end