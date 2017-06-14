Vagrant.configure("2") do |config|
	config.vm.box = "hashicorp/precise64"
	config.vm.network "forwarded_port", guest: 4000, host: 4000
	config.vm.synced_folder "./", "/documentation"
	config.vm.provision "shell", inline: <<-SHELL
		apt-get update
		apt-get install -y python-software-properties
		
		apt-add-repository -y ppa:brightbox/ruby-ng
		apt-get update
		
		apt-get install -y build-essential node ruby2.4 ruby2.4-dev
		
		gem install bundler

		cd /documentation
		bundle install

	SHELL
	config.vm.provision "shell", run: 'always', inline: <<-SHELL
		cd /documentation
		jekyll s --host=0.0.0.0 -B -I
	SHELL
end
