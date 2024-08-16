"use server";
export async function getData(){
    const res = await fetch("https://api.github.com/repositories")
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}
