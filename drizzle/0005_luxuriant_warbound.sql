CREATE TABLE `agent_waitlist` (
	`id` int AUTO_INCREMENT NOT NULL,
	`email` varchar(320) NOT NULL,
	`name` varchar(255),
	`company` varchar(255),
	`interest` varchar(255),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `agent_waitlist_id` PRIMARY KEY(`id`)
);
