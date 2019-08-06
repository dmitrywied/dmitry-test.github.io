new Vue({
	el: '#web_app',
	data: {
		phone_active: false,
		map_active: false,
		timer: null,
		texts: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
		'Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure.'],
		currentText: 0
	},
	methods: {
		startRotation: function () {
					this.timer = setInterval(this.next, 3000);
			},
		next: function () {
			this.currentText += 1
		}
	},
	mounted: function () {
		this.startRotation();
	}
});
