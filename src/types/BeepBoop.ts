export enum APIRoutes {
    Profile = "profile/:id",
    Ranking = "rank/:id",
    Leaderboard = "leaderboard/:id",
    ValidateToken = "/validate"
}

export enum APIVersions {
    v1 = "v1"
}

const CurrentVersion = APIVersions.v1;

export class Routes {
    static Profile(id: string) {
        return `/${CurrentVersion}/${APIRoutes.Profile}/${id}`;
    }

    static Ranking(id: string) {
        return `/${CurrentVersion}/${APIRoutes.Ranking}/${id}`;
    }

    static Leaderboard(id: string) {
        return `/${CurrentVersion}/${APIRoutes.Leaderboard}/${id}`;
    }

    static ValidateToken(token: string) {
        return `/${CurrentVersion}/${APIRoutes.ValidateToken}?token=${token}`;
    }
}

export interface MemberRank {
    CustomId: string;
    MemberId: string;
    Level: number;
    LastUpdated: Date;
    GuildId: string;
    XP: number;
}