CREATE TABLE `error_404_logs` (
	`id` int AUTO_INCREMENT NOT NULL,
	`requested_url` text NOT NULL,
	`referrer` text,
	`user_agent` text,
	`suggested_url` text,
	`was_redirected` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `error_404_logs_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `short_links` (
	`id` int AUTO_INCREMENT NOT NULL,
	`slug` varchar(32) NOT NULL,
	`target_url` text NOT NULL,
	`title` varchar(255),
	`description` text,
	`clicks` int NOT NULL DEFAULT 0,
	`created_by` int,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `short_links_id` PRIMARY KEY(`id`),
	CONSTRAINT `short_links_slug_unique` UNIQUE(`slug`)
);
