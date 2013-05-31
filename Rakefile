
task :default => 'cfebs:server'

namespace :cfebs do
  @compile_dir = '../cfebs.github.com'
  @prod = "git@github.com:cfebs/cfebs.github.com.git"

  desc "Run the jekyll server"
  task :server do
    sh 'jekyll serve -w'
  end

  desc "Clone from production to the compile directory"
  task :clone_compile do
    if File.directory? @compile_dir
      puts "%s Already exists, not cloning" % @compile_dir
    else
      sh "git clone #{@prod} #{@compile_dir}"
    end
  end

  desc "Copy the _site directory to compile directory and commit with a timestamp"
  task :compile => [:validate_compile_dir] do
    sh 'jekyll build'
    sh "cp -R _site/* #{@compile_dir}"
    Dir.chdir(@compile_dir)
    sh 'git add .'
    sh 'git commit -am  "`date +%F_%H-%M_%s`"'
  end

  desc "Deploys by pushing the compile directory to prod"
  task:deploy => [:validate_compile_dir] do
    Dir.chdir(@compile_dir)
    sh 'git pull'
    sh 'git push origin master'
  end

  # Is the compile directory created?
  task :validate_compile_dir do
    if !File.directory? @compile_dir
      fail
    end

    # is there git?
    if !File.directory? "#{@compile_dir}/.git"
      fail
    end

    # make sure we're up to date
    Dir.chdir(@compile_dir)
    sh 'git pull'

  end

end
