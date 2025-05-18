CREATE TYPE "public"."link_status" AS ENUM('ENABLE', 'DISABLE');--> statement-breakpoint
CREATE TABLE "link" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"status" "link_status" NOT NULL,
	"name" text NOT NULL,
	"token" text NOT NULL,
	"redirect_url" text NOT NULL,
	"redirect_count" integer NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "link" ADD CONSTRAINT "link_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;