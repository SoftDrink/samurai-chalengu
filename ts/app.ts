/// <reference path="../lib/phaser.d.ts"/>

class SimpleGame
{
	private game; 

	constructor()
	{
		this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create, update: this.update });
	}

	public preload()
	{
		this.game.load.image('logo' ,'./phaser.png');
	}

	public create()
	{
		let logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
		logo.anchor.setTo(0.5,0.5);
		logo.scale.setTo(0.1,0.1)
	}

	public update()
	{

	}
};

window.onload = () =>
{
	let game = new SimpleGame(); 
}