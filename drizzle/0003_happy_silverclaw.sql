CREATE TABLE `domain_inquiries` (
	`id` int AUTO_INCREMENT NOT NULL,
	`domain` varchar(255) NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`message` text,
	`status` enum('new','contacted','negotiating','sold','declined') NOT NULL DEFAULT 'new',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `domain_inquiries_id` PRIMARY KEY(`id`)
);
