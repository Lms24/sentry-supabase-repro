export const load = async ({ locals: { supabase } }) => {
	const { data, error } = await supabase.from('profiles').select('*').limit(10);
	console.log(data, error);
	return { users: data };
};
