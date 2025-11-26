import passport from 'passport';
import { Strategy } from 'passport-google-oauth20';
import session from 'express-session';
import { Express } from 'express';

export const initGoogleAuth = (app: Express) => {
	passport.use(
		new Strategy(
			{
				clientID: process.env.GOOGLE_ID!,
				clientSecret: process.env.GOOGLE_SECRET!,
				callbackURL: process.env.GOOGLE_CALLBACK_URL,
			},
			(accessToken, refreshToken, profile, cb) => {
                return cb(null, profile);
            }
		)
	);
};
