import { MigrationInterface, QueryRunner } from 'typeorm';

export class initialDatabaseStructure1653401934561
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
      -- -------------------------------------------------------------
-- TablePlus 4.6.4(414)
--
-- https://tableplus.com/
--
-- Database: art_dev3
-- Generation Time: 2022-05-24 05:20:20.3480
-- -------------------------------------------------------------



-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS address_types_id_seq;

-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."address_types" (
    "id" int4 NOT NULL DEFAULT nextval('address_types_id_seq'::regclass),
    "name" varchar(30) NOT NULL,
    "default" bool NOT NULL DEFAULT false,
    "created_at" timestamp NOT NULL DEFAULT now(),
    "updated_at" timestamp NOT NULL DEFAULT now(),
    "created_by" uuid NOT NULL,
    "updated_by" uuid NOT NULL,
    PRIMARY KEY ("id")
);


-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS addresses_id_seq;

-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."addresses" (
    "id" int4 NOT NULL DEFAULT nextval('addresses_id_seq'::regclass),
    "address1" varchar(250),
    "address2" varchar(250),
    "city" varchar(150),
    "state_province" varchar(150),
    "country" varchar(150),
    "postal" varchar(20),
    "address_type_id" int4 NOT NULL,
    "user_id" uuid,
    PRIMARY KEY ("id")
);


-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."asset_collection_type" (
    "asset_collection_type_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "asset_collection_type_name" varchar(30),
    PRIMARY KEY ("asset_collection_type_id")
);


-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS asset_types_id_seq;

-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."asset_types" (
    "id" int4 NOT NULL DEFAULT nextval('asset_types_id_seq'::regclass),
    "name" varchar(50) NOT NULL,
    "default" bool NOT NULL DEFAULT false,
    "created_at" timestamp NOT NULL DEFAULT now(),
    "updated_at" timestamp NOT NULL DEFAULT now(),
    "created_by" uuid NOT NULL,
    "updated_by" uuid NOT NULL,
    PRIMARY KEY ("id")
);


-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."assets" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "description" varchar(250),
    "title" varchar(150) NOT NULL,
    "external_link" varchar(1024),
    "title_of_work" varchar(1024),
    "traits" varchar(1024),
    "place_of_publication" varchar(128),
    "publication_date" varchar(12),
    "dimensions" varchar(128),
    "materials" varchar(128),
    "edition_number" varchar(128),
    "number_of_editions" varchar(128),
    "token_address" varchar(50),
    "approved_status_id" uuid,
    "is_added_to_feed" bool DEFAULT false,
    "is_blockchain_enabled" bool DEFAULT false,
    "is_minted" bool DEFAULT false,
    "is_private" bool DEFAULT false,
    "is_monitored" bool DEFAULT false,
    "monitor_start_date" date,
    "created_at" timestamp NOT NULL DEFAULT now(),
    "updated_at" timestamp NOT NULL DEFAULT now(),
    "owner_id" uuid NOT NULL,
    "asset_type_id" int4 NOT NULL,
    "created_by" uuid NOT NULL,
    "updated_by" uuid NOT NULL,
    PRIMARY KEY ("id")
);


-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."assets_tags" (
    "tag_id" int4 NOT NULL,
    "asset_id" uuid NOT NULL,
    PRIMARY KEY ("tag_id","asset_id")
);


-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS assets_user_roles_id_seq;

-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."assets_user_roles" (
    "id" int4 NOT NULL DEFAULT nextval('assets_user_roles_id_seq'::regclass),
    "invitation_code, length: 35" varchar,
    "pseudonym, length: 35" varchar,
    "invitation_accepted" bool,
    "stake" numeric(5,2) DEFAULT '0'::numeric,
    "additionalInfo" jsonb NOT NULL DEFAULT '{}'::jsonb,
    "created_at" timestamp NOT NULL DEFAULT now(),
    "updated_at" timestamp NOT NULL DEFAULT now(),
    "invited_by" uuid NOT NULL,
    "user_id" uuid NOT NULL,
    "asset_id" uuid NOT NULL,
    "role_id" int4 NOT NULL,
    PRIMARY KEY ("id")
);


-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."auction_info" (
    "auction_info_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    PRIMARY KEY ("auction_info_id")
);


-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."auctions" (
    "auction_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "auction_start_date" timestamptz,
    "auction_end_date" timestamptz,
    "auction_type_id" uuid,
    "auction_starting_price" int8,
    "auction_reserve_price" int8,
    "additional_content" varchar(250),
    "resale_royalty_id" uuid,
    "auction_last_bid_id" uuid,
    "currency_type_id" uuid,
    "sale_id" uuid,
    PRIMARY KEY ("auction_id")
);


-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS awards_id_seq;

-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."awards" (
    "id" int4 NOT NULL DEFAULT nextval('awards_id_seq'::regclass),
    "title" varchar(250) NOT NULL,
    "organization" varchar(250) NOT NULL,
    "link" varchar(1000) NOT NULL,
    "date" date NOT NULL,
    "created_at" timestamp NOT NULL DEFAULT now(),
    "updated_at" timestamp NOT NULL DEFAULT now(),
    "user_id" uuid NOT NULL,
    PRIMARY KEY ("id")
);


-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."bids" (
    "bids_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "created_at" timestamp,
    "updated_at" timestamp,
    "auction_price" int8,
    "blockchain_account" varchar(50),
    "auction_id" uuid,
    PRIMARY KEY ("bids_id")
);


-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."collection_roles" (
    "collection_role_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "collection_role_name" varchar,
    PRIMARY KEY ("collection_role_id")
);


-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."collections" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "name" varchar(75) NOT NULL,
    "short_description" varchar(250),
    "description" text,
    "private" bool NOT NULL DEFAULT false,
    "created_at" timestamp NOT NULL DEFAULT now(),
    "updated_at" timestamp NOT NULL DEFAULT now(),
    "created_by" uuid NOT NULL,
    "updated_by" uuid NOT NULL,
    PRIMARY KEY ("id")
);


-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS collections_assets_id_seq;

-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."collections_assets" (
    "id" int4 NOT NULL DEFAULT nextval('collections_assets_id_seq'::regclass),
    "owner_curator_agreement" bool NOT NULL DEFAULT false,
    "ip_agreement" bool NOT NULL DEFAULT false,
    "term_agreement" bool NOT NULL DEFAULT false,
    "created_at" timestamp NOT NULL DEFAULT now(),
    "updated_at" timestamp NOT NULL DEFAULT now(),
    "added_by" uuid NOT NULL,
    "role_id" int4 NOT NULL,
    "asset_id" uuid NOT NULL,
    "collection_id" uuid NOT NULL,
    "last_updated_by" uuid NOT NULL,
    PRIMARY KEY ("id")
);


-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."currency_type" (
    "currency_type_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "currency_type_name" varchar(30),
    PRIMARY KEY ("currency_type_id")
);


-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."event_roles" (
    "event_role_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "event_role_name" varchar(30),
    PRIMARY KEY ("event_role_id")
);


-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."events" (
    "event_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "event_title" varchar(100),
    "event_type_id" uuid,
    "waitlist_id" uuid,
    "event_url" varchar(250),
    "notification_id" uuid,
    "event_image_id" uuid,
    "collection_id" uuid,
    "event_start_date" date,
    "event_end_date" date,
    "event_description" text,
    "created_at" timestamp NOT NULL DEFAULT now(),
    "updated_at" timestamp NOT NULL DEFAULT now(),
    PRIMARY KEY ("event_id")
);


-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."file_type" (
    "file_type_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "file_type_name" varchar,
    "file_type_icon_image_id" uuid,
    PRIMARY KEY ("file_type_id")
);


-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."files" (
    "file_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "created_at" timestamp,
    "updated_at" timestamp,
    "file_url" varchar(1024),
    "file_size" numeric,
    "file_name" varchar(128),
    "file_description" varchar(250),
    "file_type_id" uuid,
    PRIMARY KEY ("file_id")
);


-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."fixed_sale_info" (
    "fixed_sale_info_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    PRIMARY KEY ("fixed_sale_info_id")
);


-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."fixed_sales" (
    "fixed_sale_id" uuid NOT NULL,
    "fixed_sale_price" int8,
    "currency_type_id" uuid,
    "sale_id" uuid,
    PRIMARY KEY ("fixed_sale_id")
);


-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS followers_likes_id_seq;
DROP TYPE IF EXISTS "public"."followers_likes_publicity_type_enum1";
CREATE TYPE "public"."followers_likes_publicity_type_enum1" AS ENUM ('0', '1');

-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."followers_likes" (
    "id" int4 NOT NULL DEFAULT nextval('followers_likes_id_seq'::regclass),
    "publicity_type" "public"."followers_likes_publicity_type_enum1" NOT NULL,
    "created_at" timestamp NOT NULL DEFAULT now(),
    "updated_at" timestamp NOT NULL DEFAULT now(),
    "user_id" uuid NOT NULL,
    "primary_type" varchar(50) NOT NULL,
    "primary_id" uuid NOT NULL,
    PRIMARY KEY ("id")
);


-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS image_types_id_seq;

-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."image_types" (
    "id" int4 NOT NULL DEFAULT nextval('image_types_id_seq'::regclass),
    "name" varchar(30) NOT NULL,
    "default" bool NOT NULL DEFAULT false,
    "created_at" timestamp NOT NULL DEFAULT now(),
    "updated_at" timestamp NOT NULL DEFAULT now(),
    "created_by" uuid NOT NULL,
    "updated_by" uuid NOT NULL,
    PRIMARY KEY ("id")
);


-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS images_id_seq;

-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."images" (
    "id" int4 NOT NULL DEFAULT nextval('images_id_seq'::regclass),
    "name" varchar(50),
    "alt" varchar(150),
    "aws_storage_link" varchar(1000) NOT NULL,
    "primary_type" varchar(50) NOT NULL,
    "created_at" timestamp NOT NULL DEFAULT now(),
    "updated_at" timestamp NOT NULL DEFAULT now(),
    "image_type_id" int4 NOT NULL,
    "primary_id" uuid NOT NULL,
    PRIMARY KEY ("id")
);


-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."ip_infringement" (
    "ip_infringement_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "ip_infringment_source" varchar,
    "ip_monitor_id" uuid,
    PRIMARY KEY ("ip_infringement_id")
);


-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."ip_monitor" (
    "ip_monitor_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "infringing_user_id" uuid,
    "infringement_source_id" uuid,
    "is_infringement" bool,
    "infringement_detect_date" timestamp,
    "infringement_start_date" timestamp,
    "infringement_close_date" timestamp,
    "asset_monitoring_frequency_id" uuid,
    "infringement_image_url" varchar(1024),
    "infringement_image_id" uuid,
    PRIMARY KEY ("ip_monitor_id")
);


-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."license_info" (
    "license_info_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "license_info_name" varchar,
    "license_period_id" uuid,
    PRIMARY KEY ("license_info_id")
);


-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."license_period" (
    "license_period_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "license_period_name" varchar,
    PRIMARY KEY ("license_period_id")
);


-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."licenses" (
    "license_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "is_license_advance_refundable" bool,
    "license_start_date" timestamp,
    "license_advance" int8,
    "license_conditions" varchar(550),
    "license_usage_rights" varchar(550),
    "license_period_id" uuid,
    "currency_type_id" uuid,
    "sale_id" uuid,
    PRIMARY KEY ("license_id")
);


-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS links_id_seq;

-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."links" (
    "id" int4 NOT NULL DEFAULT nextval('links_id_seq'::regclass),
    "link" varchar(1000) NOT NULL,
    "date" date NOT NULL,
    "created_at" timestamp NOT NULL DEFAULT now(),
    "updated_at" timestamp NOT NULL DEFAULT now(),
    "user_id" uuid NOT NULL,
    PRIMARY KEY ("id")
);


-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."messages" (
    "messages_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "message_content" varchar(250),
    "message_sent" timestamptz,
    "message_received" timestamptz,
    PRIMARY KEY ("messages_id")
);


-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."metadata" (
    "metadata_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "asset_title" varchar(150),
    "pseudonym" varchar(150),
    "display_name" varchar(150),
    "publication_date" date,
    "creation_date" date,
    "place of publication" varchar(150),
    "number_of_limited_editions" int4,
    "metadata_description" varchar(250),
    "asset_details" varchar(250),
    "nft_details" varchar(250),
    "created_at" timestamp,
    "updated_at" timestamp,
    "artwork_type_id" uuid,
    "traits" varchar,
    PRIMARY KEY ("metadata_id")
);


-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS notification_types_id_seq;

-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."notification_types" (
    "id" int4 NOT NULL DEFAULT nextval('notification_types_id_seq'::regclass),
    "name" varchar(30) NOT NULL,
    "default" bool NOT NULL DEFAULT false,
    "created_at" timestamp NOT NULL DEFAULT now(),
    "updated_at" timestamp NOT NULL DEFAULT now(),
    "created_by" uuid NOT NULL,
    "updated_by" uuid NOT NULL,
    PRIMARY KEY ("id")
);


-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."ownership_certificates" (
    "ownership_certificate_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "created_at" timestamp,
    "place_of_publication" text,
    "is_ownership_certificate_minted" bool,
    "sale_id" uuid,
    PRIMARY KEY ("ownership_certificate_id")
);


-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS press_id_seq;

-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."press" (
    "id" int4 NOT NULL DEFAULT nextval('press_id_seq'::regclass),
    "title" varchar(250) NOT NULL,
    "link" varchar(1000) NOT NULL,
    "date" date NOT NULL,
    "created_at" timestamp NOT NULL DEFAULT now(),
    "updated_at" timestamp NOT NULL DEFAULT now(),
    "user_id" uuid NOT NULL,
    PRIMARY KEY ("id")
);


-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS roles_id_seq;

-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."roles" (
    "id" int4 NOT NULL DEFAULT nextval('roles_id_seq'::regclass),
    "name" varchar(30) NOT NULL,
    "default" bool NOT NULL DEFAULT false,
    "created_at" timestamp NOT NULL DEFAULT now(),
    "updated_at" timestamp NOT NULL DEFAULT now(),
    "created_by" uuid NOT NULL,
    "updated_by" uuid NOT NULL,
    PRIMARY KEY ("id")
);


-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."royalties" (
    "royalties_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "created_at" timestamp,
    "updated_at" timestamp,
    "resale_royalty_term" numeric,
    "resale_royalty_percentages" numeric,
    "sales_type" text,
    "resale_royalty" numeric,
    "primary_sale_royalty_payment_split" numeric,
    "resale_royalty_payment_split" numeric,
    "maximum_resale_royalty" numeric,
    "royalty_term_id" uuid,
    "sale_id" uuid,
    PRIMARY KEY ("royalties_id")
);


-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."royalty_info" (
    "royalty_info_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "royalty_term_id" uuid,
    PRIMARY KEY ("royalty_info_id")
);


-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."royalty_term" (
    "royalty_term_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "royalty_term_name" varchar(30),
    PRIMARY KEY ("royalty_term_id")
);


-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."sale_roles" (
    "sale_role_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "sale_role_name" varchar,
    PRIMARY KEY ("sale_role_id")
);


-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."sales" (
    "sale_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "modified_by" timestamp,
    "created_at" timestamp,
    "updated_at" timestamp,
    "additional_content" text,
    "sales_conditions" text,
    "sales_price" int8,
    "service_fee" int8,
    "add_to_feed" bool,
    "currency_type_id" uuid,
    "sales_type_id" uuid,
    "blockchain_transaction_id" int8,
    "shipping_address_id" uuid,
    PRIMARY KEY ("sale_id")
);


-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."sales_type" (
    "sale_type_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "sale_type_name" varchar(30),
    PRIMARY KEY ("sale_type_id")
);


-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS tags_id_seq;

-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."tags" (
    "id" int4 NOT NULL DEFAULT nextval('tags_id_seq'::regclass),
    "name" varchar(30) NOT NULL,
    "default" bool NOT NULL DEFAULT false,
    "created_at" timestamp NOT NULL DEFAULT now(),
    "updated_at" timestamp NOT NULL DEFAULT now(),
    "created_by" uuid NOT NULL,
    "updated_by" uuid NOT NULL,
    PRIMARY KEY ("id")
);


-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS team_members_id_seq;

-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."team_members" (
    "id" int4 NOT NULL DEFAULT nextval('team_members_id_seq'::regclass),
    "invitation_code, length: 35" varchar,
    "accepted" bool,
    "removed" bool,
    "created_at" timestamp NOT NULL DEFAULT now(),
    "updated_at" timestamp NOT NULL DEFAULT now(),
    "member_id" uuid NOT NULL,
    "owner_id" uuid NOT NULL,
    PRIMARY KEY ("id")
);



-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."user_notification_settings" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "items_sold" bool NOT NULL DEFAULT false,
    "bid_activity" bool NOT NULL DEFAULT false,
    "price_change" bool NOT NULL DEFAULT false,
    "auction_expiration" bool NOT NULL DEFAULT false,
    "out_bid" bool NOT NULL DEFAULT false,
    "owned_items_updates" bool NOT NULL DEFAULT false,
    "successful_purchase" bool NOT NULL DEFAULT false,
    "news_letter" bool NOT NULL DEFAULT false,
    "referral_successful" bool NOT NULL DEFAULT false,
    "funds_added_or_removed" bool NOT NULL DEFAULT false,
    "drop_reminder" bool NOT NULL DEFAULT false,
    "event_reminder" bool NOT NULL DEFAULT false,
    "followers_following" bool NOT NULL DEFAULT false,
    "digital_identity_verification" bool NOT NULL DEFAULT false,
    "assetLiked" bool NOT NULL DEFAULT false,
    "notification_type_id" int4,
    "user_id" uuid NOT NULL,
    PRIMARY KEY ("id")
);


-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS user_roles_id_seq;

-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."user_roles" (
    "id" int4 NOT NULL DEFAULT nextval('user_roles_id_seq'::regclass),
    "created_at" timestamp NOT NULL DEFAULT now(),
    "updated_at" timestamp NOT NULL DEFAULT now(),
    "role_id" int4 NOT NULL,
    "user_id" uuid NOT NULL,
    PRIMARY KEY ("id")
);


-- Table Definition
DROP TYPE IF EXISTS "public"."users_verificationtype_enum1";
CREATE TYPE "public"."users_verificationtype_enum1" AS ENUM ('NONE', 'UPLOAD_MANAGE', 'BROWSE');
DROP TYPE IF EXISTS "public"."users_wallettype_enum1";
CREATE TYPE "public"."users_wallettype_enum1" AS ENUM ('ethereum');

-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."users" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "first_name" varchar(150),
    "last_name" varchar(150),
    "username" varchar(150),
    "email" varchar(100) NOT NULL,
    "password" varchar(100) NOT NULL,
    "website" varchar(256),
    "bio" text,
    "mobile_phone" varchar(40),
    "is_active" bool NOT NULL DEFAULT true,
    "is_banned" bool NOT NULL DEFAULT false,
    "is_suspended" bool NOT NULL DEFAULT false,
    "two_factor_auth" bool NOT NULL DEFAULT false,
    "two_factor_auth_enabled" bool NOT NULL DEFAULT false,
    "forgot_password_code, length: 35" varchar,
    "verification_email_code, length: 35" varchar,
    "login_otp_code, length: 35" varchar,
    "user_verification" bool NOT NULL DEFAULT false,
    "user_verification_approval_date" timestamp,
    "verification_code, length: 35" varchar,
    "verified" bool NOT NULL DEFAULT false,
    "verificationType" "public"."users_verificationtype_enum1" NOT NULL DEFAULT 'NONE'::users_verificationtype_enum1,
    "user_document" varchar,
    "facebook_url, length: 200" varchar,
    "instagram_url, length: 200" varchar,
    "twitter_url, length: 200" varchar,
    "google" jsonb NOT NULL DEFAULT '{}'::jsonb,
    "facebook" jsonb NOT NULL DEFAULT '{}'::jsonb,
    "twitter" jsonb NOT NULL DEFAULT '{}'::jsonb,
    "instagram" jsonb NOT NULL DEFAULT '{}'::jsonb,
    "created_at" timestamp NOT NULL DEFAULT now(),
    "updated_at" timestamp NOT NULL DEFAULT now(),
    "deleted_at" timestamp,
    "pseudonym" varchar(100),
    "discord" varchar(256),
    "organization" varchar(100),
    "address" varchar,
    "city" varchar,
    "state" varchar,
    "zipcode" varchar,
    "photo" varchar,
    "digital_identity" varchar,
    "wallet_address" varchar,
    "primaryRole" varchar,
    "primary_role_id" int4,
    "image_id" int4,
    "invited_by" uuid,
    "status" bool NOT NULL DEFAULT false,
    "walletType" "public"."users_wallettype_enum1" NOT NULL DEFAULT 'ethereum'::users_wallettype_enum1,
    PRIMARY KEY ("id")
);


-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS users_assets_id_seq;

-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."users_assets" (
    "id" int4 NOT NULL DEFAULT nextval('users_assets_id_seq'::regclass),
    PRIMARY KEY ("id")
);


-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."waitlist_roles" (
    "waitlist_role_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "waitlist_role_name" varchar(30),
    PRIMARY KEY ("waitlist_role_id")
);


-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."waitlists" (
    "waitlist_id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "waitlist_name" varchar(50),
    PRIMARY KEY ("waitlist_id")
);

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS role_entity_id_seq;

-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."role_entity" (
    "id" int4 NOT NULL DEFAULT nextval('role_entity_id_seq'::regclass),
    "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "name" varchar NOT NULL,
    PRIMARY KEY ("id")
);

-- Table Definition
CREATE TABLE IF NOT EXISTS "public"."users_roles_role_entity" (
    "usersId" uuid NOT NULL,
    "roleEntityId" int4 NOT NULL,
    CONSTRAINT "FK_1f51226f897adc3f9bb0e0ec0c4" FOREIGN KEY ("roleEntityId") REFERENCES "public"."role_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "FK_a11f191e0683f2fdceccc787f1a" FOREIGN KEY ("usersId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    PRIMARY KEY ("usersId","roleEntityId")
);



ALTER TABLE "public"."address_types" ADD FOREIGN KEY ("updated_by") REFERENCES "public"."users"("id");
ALTER TABLE "public"."address_types" ADD FOREIGN KEY ("created_by") REFERENCES "public"."users"("id");
ALTER TABLE "public"."addresses" ADD FOREIGN KEY ("address_type_id") REFERENCES "public"."address_types"("id");
ALTER TABLE "public"."addresses" ADD FOREIGN KEY ("user_id") REFERENCES "public"."users"("id");
ALTER TABLE "public"."asset_types" ADD FOREIGN KEY ("created_by") REFERENCES "public"."users"("id");
ALTER TABLE "public"."asset_types" ADD FOREIGN KEY ("updated_by") REFERENCES "public"."users"("id");
ALTER TABLE "public"."assets" ADD FOREIGN KEY ("asset_type_id") REFERENCES "public"."asset_types"("id");
ALTER TABLE "public"."assets" ADD FOREIGN KEY ("owner_id") REFERENCES "public"."users"("id");
ALTER TABLE "public"."assets" ADD FOREIGN KEY ("updated_by") REFERENCES "public"."users"("id");
ALTER TABLE "public"."assets" ADD FOREIGN KEY ("created_by") REFERENCES "public"."users"("id");
ALTER TABLE "public"."assets_tags" ADD FOREIGN KEY ("tag_id") REFERENCES "public"."tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."assets_tags" ADD FOREIGN KEY ("asset_id") REFERENCES "public"."assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."assets_user_roles" ADD FOREIGN KEY ("asset_id") REFERENCES "public"."assets"("id");
ALTER TABLE "public"."assets_user_roles" ADD FOREIGN KEY ("user_id") REFERENCES "public"."users"("id");
ALTER TABLE "public"."assets_user_roles" ADD FOREIGN KEY ("role_id") REFERENCES "public"."roles"("id");
ALTER TABLE "public"."assets_user_roles" ADD FOREIGN KEY ("invited_by") REFERENCES "public"."users"("id");
ALTER TABLE "public"."auctions" ADD FOREIGN KEY ("currency_type_id") REFERENCES "public"."currency_type"("currency_type_id");
ALTER TABLE "public"."auctions" ADD FOREIGN KEY ("sale_id") REFERENCES "public"."sales"("sale_id");
ALTER TABLE "public"."awards" ADD FOREIGN KEY ("user_id") REFERENCES "public"."users"("id");
ALTER TABLE "public"."bids" ADD FOREIGN KEY ("auction_id") REFERENCES "public"."auctions"("auction_id");
ALTER TABLE "public"."collections" ADD FOREIGN KEY ("created_by") REFERENCES "public"."users"("id");
ALTER TABLE "public"."collections" ADD FOREIGN KEY ("updated_by") REFERENCES "public"."users"("id");
ALTER TABLE "public"."collections_assets" ADD FOREIGN KEY ("last_updated_by") REFERENCES "public"."users"("id");
ALTER TABLE "public"."collections_assets" ADD FOREIGN KEY ("role_id") REFERENCES "public"."roles"("id");
ALTER TABLE "public"."collections_assets" ADD FOREIGN KEY ("added_by") REFERENCES "public"."users"("id");
ALTER TABLE "public"."collections_assets" ADD FOREIGN KEY ("collection_id") REFERENCES "public"."collections"("id");
ALTER TABLE "public"."collections_assets" ADD FOREIGN KEY ("asset_id") REFERENCES "public"."assets"("id");
ALTER TABLE "public"."file_type" ADD FOREIGN KEY ("file_type_icon_image_id") REFERENCES "public"."files"("file_id");
ALTER TABLE "public"."fixed_sales" ADD FOREIGN KEY ("currency_type_id") REFERENCES "public"."currency_type"("currency_type_id");
ALTER TABLE "public"."fixed_sales" ADD FOREIGN KEY ("sale_id") REFERENCES "public"."sales"("sale_id");
ALTER TABLE "public"."followers_likes" ADD FOREIGN KEY ("user_id") REFERENCES "public"."users"("id");
ALTER TABLE "public"."image_types" ADD FOREIGN KEY ("created_by") REFERENCES "public"."users"("id");
ALTER TABLE "public"."image_types" ADD FOREIGN KEY ("updated_by") REFERENCES "public"."users"("id");
ALTER TABLE "public"."images" ADD FOREIGN KEY ("primary_id") REFERENCES "public"."users"("id");
ALTER TABLE "public"."images" ADD FOREIGN KEY ("image_type_id") REFERENCES "public"."image_types"("id");
ALTER TABLE "public"."ip_infringement" ADD FOREIGN KEY ("ip_monitor_id") REFERENCES "public"."ip_monitor"("ip_monitor_id");
ALTER TABLE "public"."license_info" ADD FOREIGN KEY ("license_period_id") REFERENCES "public"."license_period"("license_period_id");
ALTER TABLE "public"."licenses" ADD FOREIGN KEY ("sale_id") REFERENCES "public"."sales"("sale_id");
ALTER TABLE "public"."licenses" ADD FOREIGN KEY ("currency_type_id") REFERENCES "public"."currency_type"("currency_type_id");
ALTER TABLE "public"."links" ADD FOREIGN KEY ("user_id") REFERENCES "public"."users"("id");
ALTER TABLE "public"."notification_types" ADD FOREIGN KEY ("created_by") REFERENCES "public"."users"("id");
ALTER TABLE "public"."notification_types" ADD FOREIGN KEY ("updated_by") REFERENCES "public"."users"("id");
ALTER TABLE "public"."ownership_certificates" ADD FOREIGN KEY ("sale_id") REFERENCES "public"."sales"("sale_id");
ALTER TABLE "public"."press" ADD FOREIGN KEY ("user_id") REFERENCES "public"."users"("id");
ALTER TABLE "public"."roles" ADD FOREIGN KEY ("created_by") REFERENCES "public"."users"("id");
ALTER TABLE "public"."roles" ADD FOREIGN KEY ("updated_by") REFERENCES "public"."users"("id");
ALTER TABLE "public"."royalties" ADD FOREIGN KEY ("sale_id") REFERENCES "public"."sales"("sale_id");
ALTER TABLE "public"."royalties" ADD FOREIGN KEY ("royalty_term_id") REFERENCES "public"."royalty_term"("royalty_term_id");
ALTER TABLE "public"."royalty_info" ADD FOREIGN KEY ("royalty_term_id") REFERENCES "public"."royalty_term"("royalty_term_id");
ALTER TABLE "public"."tags" ADD FOREIGN KEY ("updated_by") REFERENCES "public"."users"("id");
ALTER TABLE "public"."tags" ADD FOREIGN KEY ("created_by") REFERENCES "public"."users"("id");
ALTER TABLE "public"."team_members" ADD FOREIGN KEY ("owner_id") REFERENCES "public"."users"("id");
ALTER TABLE "public"."team_members" ADD FOREIGN KEY ("member_id") REFERENCES "public"."users"("id");
ALTER TABLE "public"."user_notification_settings" ADD FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."user_notification_settings" ADD FOREIGN KEY ("notification_type_id") REFERENCES "public"."notification_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."user_roles" ADD FOREIGN KEY ("role_id") REFERENCES "public"."roles"("id");
ALTER TABLE "public"."user_roles" ADD FOREIGN KEY ("user_id") REFERENCES "public"."users"("id");
ALTER TABLE "public"."users" ADD FOREIGN KEY ("primary_role_id") REFERENCES "public"."roles"("id");
ALTER TABLE "public"."users" ADD FOREIGN KEY ("image_id") REFERENCES "public"."images"("id");
ALTER TABLE "public"."users" ADD FOREIGN KEY ("invited_by") REFERENCES "public"."users"("id");
            `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // There is no need to delete all the tables.
  }
}
