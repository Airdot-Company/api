import { ModuleError } from "../utils/Error";
import { Routes } from "../types/BeepBoop";
import wretch from "wretch";

export class BeepBoopClient {
    public token: string = null;
    public apiURL: string = "https://api.trtle.xyz"

    private request(route: string) {
        return wretch(this.apiURL + route, {
            headers: {
                Authorization: this.token
            }
        }).get().json();
    }

    GuildLeaderboard(guildId: string) {
        return this.request(Routes.Leaderboard(guildId));
    }

    GuildRanking(userId: string) {
        return this.request(Routes.Ranking(userId));
    }

    UserProfile(userId: string) {
        return this.request(Routes.Profile(userId));
    }

    async login(token: string) {
        const Result = await this.request(Routes.ValidateToken(token));
        if (Result != true) throw new ModuleError("Invalid token provided");
        else this.token = token;
        return this;
    }
}