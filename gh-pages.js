var ghpages = require('gh-pages');

ghpages.publish(
	'public', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/vanhieu95/sevlte-feedback-app.git', // Update to point to your repository
		user: {
			name: 'Hieu Nguyen', // update to use your name
			email: 'nguyenluongtrunghieu1995@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);