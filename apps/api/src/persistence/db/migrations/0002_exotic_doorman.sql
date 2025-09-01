CREATE TABLE "link_visit" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"link_id" uuid NOT NULL,
	"ip" text,
	"language" text,
	"browser" text,
	"cpu" text,
	"device" text,
	"engine" text,
	"os" text,
	"referer" text,
	"headers" text NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "link_visit" ADD CONSTRAINT "link_visit_link_id_link_id_fk" FOREIGN KEY ("link_id") REFERENCES "public"."link"("id") ON DELETE cascade ON UPDATE no action;