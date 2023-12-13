"use client";

import { useEffect, useState } from "react";
import "./index.css";

const API_URL = "https://api.team2658.org/v2";
// const API_URL = "http://localhost:1234/v2";

type User = {
	_id: string;
	username: string;
	email: string;
	firstname: string;
	lastname: string;
	accountType: number;
	token: string;
};

async function getUsers(token: string | null) {
	if (!token) return [] as User[];
	const response = await fetch(API_URL + "/users?accountType=0", {
		method: "GET",
		headers: {
			authorization: "Bearer " + token,
		},
	});
	let bruh: User[] = [];
	try {
		bruh = (await response.json()) as User[];
	} catch (e) {
		console.error(e);
	}
	return bruh;
}

async function getLeads(token: string | null): Promise<User[]> {
	if (!token) return [] as User[];
	const response = await fetch(
		"https://api.team2658.org/v2/users?accountType=2",
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				authorization: "Bearer " + token,
			},
		}
	);
	const data = await response.json();
	// return data;
	const filtered = data.filter((user: any) => {
		return user.roles[0] == undefined;
	});
	return filtered;
}

type Action = "BASE" | "LEAD" | "ADMIN" | "SUPERUSER" | "DELETE";

export default function Verify() {
	const [token, setToken] = useState<string | null>(null);
	const [users, setUsers] = useState<User[]>([]);
	const [user, setUser] = useState<Number | null>(null);
	const [leads, setLeads] = useState<User[]>([]);

	async function verifyUser(
		user: User,
		action: Action,
		token: string | null
	) {
		console.log(token);
		if (!token) return;
		console.log(action);
		try {
			if (action != "DELETE") {
				let accountType: number;
				let roles: any[] = [];
				switch (action) {
					case "BASE":
						accountType = 1;
						break;
					case "LEAD":
						accountType = 2;
						roles = [
							{
								"name": "Lead",
								"permissions": {
									"standScouting": true,
									"inPitScouting": true,
									"viewScoutingData": false,
									"makeBlogPosts": false,
									"verifySubteamAttendance": true,
									"verifyAllAttendance": true,
									"makeAnnouncements": true,
								},
							},
						];
						break;
					case "ADMIN":
						accountType = 3;
						roles = [
							{
								"name": "Lead",
								"permissions": {
									"standScouting": true,
									"inPitScouting": true,
									"viewScoutingData": false,
									"makeBlogPosts": false,
									"verifySubteamAttendance": true,
									"verifyAllAttendance": true,
									"makeAnnouncements": true,
								},
							},
						];
						break;
					case "SUPERUSER":
						accountType = 4;
						roles = [
							{
								"name": "Lead",
								"permissions": {
									"standScouting": true,
									"inPitScouting": true,
									"viewScoutingData": false,
									"makeBlogPosts": false,
									"verifySubteamAttendance": true,
									"verifyAllAttendance": true,
									"makeAnnouncements": true,
								},
							},
						];
						break;
				}
				const res = await fetch(API_URL + "/users/user/" + user._id, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + token,
					},
					body: JSON.stringify({
						"accountType": accountType,
						"roles": roles,
					}),
				});
				console.log(res);
			} else {
				await fetch(API_URL + "/users/user/" + user._id, {
					method: "DELETE",
					headers: {
						"Authorization":
							"Bearer " + localStorage.getItem("token"),
					},
				});
			}
		} catch (e) {
			console.error(e);
		}
	}

	useEffect(() => {
		setToken(localStorage.getItem("token"));
		const bruh = localStorage.getItem("userObj");
		console.log(bruh);
		if (bruh) setUser(JSON.parse(bruh)?.accountType);
	}, []);

	useEffect(() => {
		getUsers(token).then((users) => setUsers(users));
		getLeads(token).then((leads) => setLeads(leads));
	}, [token]);

	if (token && Number(user) > 2)
		return (
			<main>
				<h1 className="text-3xl font-bold m-4">Verify</h1>
				{!Array.isArray(users)
					? null
					: users?.map((user) => (
							<section
								key={user._id}
								className="m-4 p-4 bg-gray-400"
							>
								<h2>
									{user.firstname} {user.lastname}
								</h2>
								<p>{user.username}</p>
								<p>{user.email}</p>
								<button
									onClick={() =>
										verifyUser(user, "BASE", token).then(
											() =>
												getUsers(token).then((users) =>
													setUsers(users)
												)
										)
									}
								>
									Base
								</button>
								<button
									onClick={() =>
										verifyUser(user, "LEAD", token).then(
											() =>
												getUsers(token).then((users) =>
													setUsers(users)
												)
										)
									}
								>
									Lead
								</button>
								<button
									onClick={() =>
										verifyUser(user, "ADMIN", token).then(
											() =>
												getUsers(token).then((users) =>
													setUsers(users)
												)
										)
									}
								>
									Admin
								</button>
								<button
									onClick={() =>
										verifyUser(
											user,
											"SUPERUSER",
											token
										).then(() =>
											getUsers(token).then((users) =>
												setUsers(users)
											)
										)
									}
								>
									Superuser
								</button>
								<button
									onClick={() =>
										verifyUser(user, "DELETE", token).then(
											() =>
												getUsers(token).then((users) =>
													setUsers(users)
												)
										)
									}
								>
									Delete
								</button>
							</section>
					  ))}
				<h1>Leads</h1>
				{!Array.isArray(leads)
					? null
					: leads?.map((lead) => {
							return (
								<div key={lead._id}>
									<h1>
										{lead.firstname} {lead.lastname}
									</h1>
									<h2>{lead.username}</h2>
									<button
										onClick={() => {
											verifyUser(
												lead,
												"LEAD",
												token
											).then(() =>
												getLeads(token).then((leads) =>
													setLeads(leads)
												)
											);
										}}
									>
										Give Permissions
									</button>
								</div>
							);
					  })}
			</main>
		);
	else return <main>FORBIDDEN</main>;
}
