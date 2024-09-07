import { createClient } from "@/utils/supabase/server";

export async function GET() {
    try {
        const supabase = createClient();
        const {
            data: { user },
            error: userError,
        } = await supabase.auth.getUser();

        if (userError) {
            console.error("Error fetching user:", userError);
            return new Response(JSON.stringify({ error: "Failed to get user" }), {
                status: 401,
            });
        } else {
            console.log("current user", user);
        }

        const user_id = user.id;
        
        const { data: goals, error: goalsError } = await supabase
            .from ("goals")
            .select ("*")
            .eq("user_id", user_id)
            .order("created_at", { ascending: false })
            .limit(1)

        if (goalsError) {
            console.error("Error fetching goals:", goalsError);
            return new Response(JSON.stringify({ error: "Failed to get goals" }), {
                status: 500,
            });
        }

        if (goals.length === 0) {
            return new Response(JSON.stringify([]), {
                status: 200,
            });
        }

        const startDate = goals[0].created_at;
        const weekly_quota = goals[0].weekly_quota;

        const { data: jobApps, error: jobAppsError } = await supabase
            .from ("job_apps")
            .select ("*")
            .eq("user_id", user_id)
            .gte("created_at", startDate)
            .order("created_at", { ascending: false })

        console.log("jobApps", jobApps);
        console.log("weekly_quota", weekly_quota);

        if (jobAppsError) {
            console.error("Error fetching job apps:", jobAppsError);
            return new Response(JSON.stringify({ error: "Failed to get job apps" }), {
                status: 500,
            });
        }

        
        return new Response(JSON.stringify({ jobApps, weekly_quota }), {
            status: 200,
        });
    } catch (error) {
        console.error("Error handling GET request:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
            status: 500,
        });
    }
} 