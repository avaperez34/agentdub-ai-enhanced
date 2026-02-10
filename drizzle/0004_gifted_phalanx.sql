CREATE TABLE `subscription_history` (
	`id` int AUTO_INCREMENT NOT NULL,
	`subscription_id` int NOT NULL,
	`user_id` int NOT NULL,
	`action` enum('created','upgraded','downgraded','renewed','cancelled','paused','resumed') NOT NULL,
	`previous_plan_id` int,
	`new_plan_id` int,
	`notes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `subscription_history_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `subscription_plans` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`description` text,
	`price` decimal(10,2) NOT NULL,
	`billing_cycle` enum('monthly','annual') NOT NULL DEFAULT 'monthly',
	`features` json NOT NULL,
	`max_signals` int,
	`max_exports` int,
	`priority` int NOT NULL DEFAULT 0,
	`is_active` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `subscription_plans_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `subscriptions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`plan_id` int NOT NULL,
	`status` enum('active','paused','cancelled','expired') NOT NULL DEFAULT 'active',
	`start_date` timestamp NOT NULL,
	`end_date` timestamp,
	`renewal_date` timestamp,
	`auto_renew` int NOT NULL DEFAULT 1,
	`signals_used_this_month` int NOT NULL DEFAULT 0,
	`exports_used_this_month` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `subscriptions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `subscription_history` ADD CONSTRAINT `subscription_history_subscription_id_subscriptions_id_fk` FOREIGN KEY (`subscription_id`) REFERENCES `subscriptions`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `subscription_history` ADD CONSTRAINT `subscription_history_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `subscription_history` ADD CONSTRAINT `subscription_history_previous_plan_id_subscription_plans_id_fk` FOREIGN KEY (`previous_plan_id`) REFERENCES `subscription_plans`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `subscription_history` ADD CONSTRAINT `subscription_history_new_plan_id_subscription_plans_id_fk` FOREIGN KEY (`new_plan_id`) REFERENCES `subscription_plans`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `subscriptions` ADD CONSTRAINT `subscriptions_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `subscriptions` ADD CONSTRAINT `subscriptions_plan_id_subscription_plans_id_fk` FOREIGN KEY (`plan_id`) REFERENCES `subscription_plans`(`id`) ON DELETE no action ON UPDATE no action;