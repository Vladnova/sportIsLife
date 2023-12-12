class ApiSportEnergy {
    static BASE_URL = 'https://your-energy.b.goit.study/api';

    static handleErrors(method) {
        const inner = async () => {
            try {
                return await method();
            } catch (error) {
                console.error(`Помилка при запиті:`, error.message);
            }
        };
        return inner;
    }

    async getQuotes() {
        const response = await fetch(`${ApiSportEnergy.BASE_URL}/quote`);
        return await response.json();
    }

    async getByFilterName(data) {
        const params = new URLSearchParams({ ...data });
        const response = await fetch(
            `${ApiSportEnergy.BASE_URL}/filters?${params}`
        );
        return await response.json();
    }

    async getByFilterCategory(data) {
        const params = new URLSearchParams({ ...data });
        const response = await fetch(
            `${ApiSportEnergy.BASE_URL}/exercises?${params}`
        );
        return await response.json();
    }

    async getOneExercises(id) {
        const response = await fetch(`${ApiSportEnergy.BASE_URL}/exercises/${id}`);
        return await response.json();
    }

    async addExercisesRate(id, body) {
        const requestOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        };
        const response = await fetch(
            `${ApiSportEnergy.BASE_URL}/exercises/${id}/rating`,
            requestOptions
        );
        return await response.json();
    }

    async addSubscription(email) {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(email),
        };
        const response = await fetch(
            `${ApiSportEnergy.BASE_URL}/subscription`,
            requestOptions
        );
        return await response.json();
    }
}

const fetchSportEnergy = new ApiSportEnergy();

export default fetchSportEnergy;
