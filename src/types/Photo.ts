export type Photo = {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: null;
  width: 5438;
  height: 3625;
  color: string;
  blur_hash: string;
  description: null;
  alt_description: null;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  likes: 211;
  liked_by_user: false;
  current_user_collections: [];
  sponsorship: {
    impression_urls: [string, string, string];
    tagline: string;
    tagline_url: string;
    sponsor: {
      id: string;
      updated_at: string;
      username: string;
      name: string;
      first_name: string;
      last_name: null;
      twitter_username: string;
      portfolio_url: string;
      bio: string;
      location: null;
      links: {
        self: string;
        html: string;
        photos: string;
        likes: string;
        portfolio: string;
        following: string;
        followers: string;
      };
      profile_image: {
        small: string;
        medium: string;
        large: string;
      };
      instagram_username: string;
      total_collections: 0;
      total_likes: 19;
      total_photos: 13;
      accepted_tos: true;
      for_hire: false;
      social: {
        instagram_username: "mailchimp";
        portfolio_url: "https://mailchimp.com/";
        twitter_username: "Mailchimp";
        paypal_email: null;
      };
    };
  };
  topic_submissions: {};
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: null;
    twitter_username: string;
    portfolio_url: string;
    bio: string;
    location: null;
    links: {
      self: "https://api.unsplash.com/users/mailchimp";
      html: "https://unsplash.com/fr/@mailchimp";
      photos: "https://api.unsplash.com/users/mailchimp/photos";
      likes: "https://api.unsplash.com/users/mailchimp/likes";
      portfolio: "https://api.unsplash.com/users/mailchimp/portfolio";
      following: "https://api.unsplash.com/users/mailchimp/following";
      followers: "https://api.unsplash.com/users/mailchimp/followers";
    };
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    instagram_username: string;
    total_collections: 0;
    total_likes: 19;
    total_photos: 13;
    accepted_tos: true;
    for_hire: false;
    social: {
      instagram_username: string;
      portfolio_url: string;
      twitter_username: string;
      paypal_email: null;
    };
  };
};
